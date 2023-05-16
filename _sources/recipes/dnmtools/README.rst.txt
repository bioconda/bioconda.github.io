:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnmtools'
.. highlight: bash

dnmtools
========

.. conda:recipe:: dnmtools
   :replaces_section_title:
   :noindex:

   dnmtools is a set of tools for analyzing DNA methylation data from bisulfite sequencing


   :homepage: https://github.com/smithlabcode/dnmtools
   :documentation: https://dnmtools.readthedocs.io/
   
   :license: GPL-3.0-or-later
   :recipe: /`dnmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnmtools/meta.yaml>`_

   


.. conda:package:: dnmtools

   |downloads_dnmtools| |docker_dnmtools|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends gsl: ``>=2.7.1``
   :depends gsl: ``>=2.7.1,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnmtools

   and update with::

      conda update dnmtools

   or use the docker container::

      docker pull quay.io/biocontainers/dnmtools:<tag>

   (see `dnmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_dnmtools| image:: https://img.shields.io/conda/dn/bioconda/dnmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/dnmtools
   :alt:   (downloads)
.. |docker_dnmtools| image:: https://quay.io/repository/biocontainers/dnmtools/status
   :target: https://quay.io/repository/biocontainers/dnmtools
.. _`dnmtools/tags`: https://quay.io/repository/biocontainers/dnmtools?tab=tags


.. raw:: html

    <script>
        var package = "dnmtools";
        var versions = ["1.2.1","1.2.1","1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnmtools/README.html