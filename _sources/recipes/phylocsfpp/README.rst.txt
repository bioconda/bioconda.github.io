:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylocsfpp'
.. highlight: bash

phylocsfpp
==========

.. conda:recipe:: phylocsfpp
   :replaces_section_title:
   :noindex:

   A fast and user\-friendly implementation of PhyloCSF with annotation tools.

   :homepage: https://github.com/cpockrandt/PhyloCSFpp
   :license: AGPLv3
   :recipe: /`phylocsfpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp/meta.yaml>`_

   


.. conda:package:: phylocsfpp

   |downloads_phylocsfpp| |docker_phylocsfpp|

   :versions:
      
      

      ``1.1.1_4bb3c87a-0``,  ``1.1.0_519b603e-0``,  ``1.0.0_f5ab2559-1``,  ``1.0.0_f5ab2559-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libbigwig: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends openmp: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylocsfpp

   and update with::

      conda update phylocsfpp

   or use the docker container::

      docker pull quay.io/biocontainers/phylocsfpp:<tag>

   (see `phylocsfpp/tags`_ for valid values for ``<tag>``)


.. |downloads_phylocsfpp| image:: https://img.shields.io/conda/dn/bioconda/phylocsfpp.svg?style=flat
   :target: https://anaconda.org/bioconda/phylocsfpp
   :alt:   (downloads)
.. |docker_phylocsfpp| image:: https://quay.io/repository/biocontainers/phylocsfpp/status
   :target: https://quay.io/repository/biocontainers/phylocsfpp
.. _`phylocsfpp/tags`: https://quay.io/repository/biocontainers/phylocsfpp?tab=tags


.. raw:: html

    <script>
        var package = "phylocsfpp";
        var versions = ["1.1.1_4bb3c87a","1.1.0_519b603e","1.0.0_f5ab2559","1.0.0_f5ab2559"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylocsfpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylocsfpp/README.html