:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs2ncbi'
.. highlight: bash

wgs2ncbi
========

.. conda:recipe:: wgs2ncbi
   :replaces_section_title:
   :noindex:

   Toolkit for preparing genomes for submission to NCBI

   :homepage: https://github.com/naturalis/wgs2ncbi
   :license: BSD-3-Clause
   :recipe: /`wgs2ncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi/meta.yaml>`_

   


.. conda:package:: wgs2ncbi

   |downloads_wgs2ncbi| |docker_wgs2ncbi|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-uri: 
   :depends on tbl2asn: 

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

    pixi global install wgs2ncbi

to add into an existing workspace instead, run::

    pixi add wgs2ncbi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wgs2ncbi

Alternatively, to install into a new environment, run::

    conda create -n envname wgs2ncbi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wgs2ncbi:<tag>

(see `wgs2ncbi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wgs2ncbi| image:: https://img.shields.io/conda/dn/bioconda/wgs2ncbi.svg?style=flat
   :target: https://anaconda.org/bioconda/wgs2ncbi
   :alt:   (downloads)
.. |docker_wgs2ncbi| image:: https://quay.io/repository/biocontainers/wgs2ncbi/status
   :target: https://quay.io/repository/biocontainers/wgs2ncbi
.. _`wgs2ncbi/tags`: https://quay.io/repository/biocontainers/wgs2ncbi?tab=tags


.. raw:: html

    <script>
        var package = "wgs2ncbi";
        var versions = ["1.1.2","1.1.2","1.1.2","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs2ncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs2ncbi/README.html