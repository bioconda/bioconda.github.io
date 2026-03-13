:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqyclean'
.. highlight: bash

seqyclean
=========

.. conda:recipe:: seqyclean
   :replaces_section_title:
   :noindex:

   Main purpose of this software is to pre\-process NGS data in order to prepare for downstream analysis.

   :homepage: https://github.com/ibest/seqyclean
   :license: MIT / MIT
   :recipe: /`seqyclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean/meta.yaml>`_

   


.. conda:package:: seqyclean

   |downloads_seqyclean| |docker_seqyclean|

   :versions:
      
      

      ``1.10.09-6``,  ``1.10.09-5``,  ``1.10.09-4``,  ``1.10.09-3``,  ``1.10.09-2``,  ``1.10.09-1``,  ``1.10.09-0``,  ``1.10.07-1``,  ``1.10.07-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install seqyclean

to add into an existing workspace instead, run::

    pixi add seqyclean

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqyclean

Alternatively, to install into a new environment, run::

    conda create -n envname seqyclean

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqyclean:<tag>

(see `seqyclean/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqyclean| image:: https://img.shields.io/conda/dn/bioconda/seqyclean.svg?style=flat
   :target: https://anaconda.org/bioconda/seqyclean
   :alt:   (downloads)
.. |docker_seqyclean| image:: https://quay.io/repository/biocontainers/seqyclean/status
   :target: https://quay.io/repository/biocontainers/seqyclean
.. _`seqyclean/tags`: https://quay.io/repository/biocontainers/seqyclean?tab=tags


.. raw:: html

    <script>
        var package = "seqyclean";
        var versions = ["1.10.09","1.10.09","1.10.09","1.10.09","1.10.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqyclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqyclean/README.html