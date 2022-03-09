:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloacc'
.. highlight: bash

phyloacc
========

.. conda:recipe:: phyloacc
   :replaces_section_title:
   :noindex:

   Bayesian estimation of substitution rate shifts in non\-coding regions

   :homepage: https://github.com/phyloacc/PhyloAcc
   :license: GPL / GNU GPLv3
   :recipe: /`phyloacc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloacc/meta.yaml>`_

   Bayesian estimation of substitution rate shifts in non\-coding regions


.. conda:package:: phyloacc

   |downloads_phyloacc| |docker_phyloacc|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends armadillo: ``>=10.8,<11.0a0``
   :depends biopython: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyloacc

   and update with::

      conda update phyloacc

   or use the docker container::

      docker pull quay.io/biocontainers/phyloacc:<tag>

   (see `phyloacc/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloacc| image:: https://img.shields.io/conda/dn/bioconda/phyloacc.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloacc
   :alt:   (downloads)
.. |docker_phyloacc| image:: https://quay.io/repository/biocontainers/phyloacc/status
   :target: https://quay.io/repository/biocontainers/phyloacc
.. _`phyloacc/tags`: https://quay.io/repository/biocontainers/phyloacc?tab=tags


.. raw:: html

    <script>
        var package = "phyloacc";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloacc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloacc/README.html