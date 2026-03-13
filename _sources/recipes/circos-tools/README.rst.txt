:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos-tools'
.. highlight: bash

circos-tools
============

.. conda:recipe:: circos-tools
   :replaces_section_title:
   :noindex:

   circos\-tools provides several utility add\-on scripts\, such as for bundling links

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools/meta.yaml>`_

   


.. conda:package:: circos-tools

   |downloads_circos-tools| |docker_circos-tools|

   :versions:
      
      

      ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends on perl: 
   :depends on perl-bioperl: ``>=1.7``
   :depends on perl-carp: 
   :depends on perl-config-general: 
   :depends on perl-data-dumper: 
   :depends on perl-file-path: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on perl-graphics-colorobject: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-random: 
   :depends on perl-math-round: 
   :depends on perl-math-vecstat: 
   :depends on perl-memoize: 
   :depends on perl-pod-usage: 
   :depends on perl-regexp-common: 
   :depends on perl-set-intspan: 
   :depends on perl-statistics-descriptive: 
   :depends on perl-time-hires: 

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

    pixi global install circos-tools

to add into an existing workspace instead, run::

    pixi add circos-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circos-tools

Alternatively, to install into a new environment, run::

    conda create -n envname circos-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circos-tools:<tag>

(see `circos-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circos-tools| image:: https://img.shields.io/conda/dn/bioconda/circos-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/circos-tools
   :alt:   (downloads)
.. |docker_circos-tools| image:: https://quay.io/repository/biocontainers/circos-tools/status
   :target: https://quay.io/repository/biocontainers/circos-tools
.. _`circos-tools/tags`: https://quay.io/repository/biocontainers/circos-tools?tab=tags


.. raw:: html

    <script>
        var package = "circos-tools";
        var versions = ["0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos-tools/README.html