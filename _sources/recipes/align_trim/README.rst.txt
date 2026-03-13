:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'align_trim'
.. highlight: bash

align_trim
==========

.. conda:recipe:: align_trim
   :replaces_section_title:
   :noindex:

   ARTIC align\_trim\: A tool for trimming amplicon sequencing primers from aligned reads.

   :homepage: https://github.com/artic-network/align_trim
   :documentation: https://github.com/artic-network/align_trim/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`align_trim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_trim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_trim/meta.yaml>`_

   


.. conda:package:: align_trim

   |downloads_align_trim| |docker_align_trim|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on numpy: 
   :depends on primalbedtools: ``>=0.10.1``
   :depends on pysam: 
   :depends on python: ``>=3.9``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install align_trim

to add into an existing workspace instead, run::

    pixi add align_trim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install align_trim

Alternatively, to install into a new environment, run::

    conda create -n envname align_trim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/align_trim:<tag>

(see `align_trim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_align_trim| image:: https://img.shields.io/conda/dn/bioconda/align_trim.svg?style=flat
   :target: https://anaconda.org/bioconda/align_trim
   :alt:   (downloads)
.. |docker_align_trim| image:: https://quay.io/repository/biocontainers/align_trim/status
   :target: https://quay.io/repository/biocontainers/align_trim
.. _`align_trim/tags`: https://quay.io/repository/biocontainers/align_trim?tab=tags


.. raw:: html

    <script>
        var package = "align_trim";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/align_trim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/align_trim/README.html