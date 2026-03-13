:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpgenie'
.. highlight: bash

snpgenie
========

.. conda:recipe:: snpgenie
   :replaces_section_title:
   :noindex:

   Program for estimating πN\/πS\, dN\/dS\, and other diversity measures from next\-generation sequencing data

   :homepage: https://github.com/chasewnelson/SNPGenie
   :license: GPL / GPL-3.0
   :recipe: /`snpgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpgenie/meta.yaml>`_

   


.. conda:package:: snpgenie

   |downloads_snpgenie| |docker_snpgenie|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on perl: 
   :depends on perl-data-dumper: 
   :depends on perl-file-temp: 
   :depends on perl-io-handle: 
   :depends on perl-list-util: 
   :depends on perl-parallel-forkmanager: 

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

    pixi global install snpgenie

to add into an existing workspace instead, run::

    pixi add snpgenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snpgenie

Alternatively, to install into a new environment, run::

    conda create -n envname snpgenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snpgenie:<tag>

(see `snpgenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snpgenie| image:: https://img.shields.io/conda/dn/bioconda/snpgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/snpgenie
   :alt:   (downloads)
.. |docker_snpgenie| image:: https://quay.io/repository/biocontainers/snpgenie/status
   :target: https://quay.io/repository/biocontainers/snpgenie
.. _`snpgenie/tags`: https://quay.io/repository/biocontainers/snpgenie?tab=tags


.. raw:: html

    <script>
        var package = "snpgenie";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpgenie/README.html