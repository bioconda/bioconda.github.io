:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-disambiguate'
.. highlight: bash

ngs-disambiguate
================

.. conda:recipe:: ngs-disambiguate
   :replaces_section_title:
   :noindex:

   Disambiguation algorithm for reads aligned to human and mouse genomes using Tophat or BWA mem

   :homepage: https://github.com/AstraZeneca-NGS/disambiguate
   :license: MIT
   :recipe: /`ngs-disambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate/meta.yaml>`_

   


.. conda:package:: ngs-disambiguate

   |downloads_ngs-disambiguate| |docker_ngs-disambiguate|

   :versions:
      
      

      ``2018.05.03-5``,  ``2018.05.03-4``,  ``2018.05.03-3``,  ``2018.05.03-2``,  ``2018.05.03-1``,  ``2018.05.03-0``,  ``2016.11.10-0``,  ``1.0.0-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-disambiguate

   and update with::

      conda update ngs-disambiguate

   or use the docker container::

      docker pull quay.io/biocontainers/ngs-disambiguate:<tag>

   (see `ngs-disambiguate/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-disambiguate| image:: https://img.shields.io/conda/dn/bioconda/ngs-disambiguate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-disambiguate
   :alt:   (downloads)
.. |docker_ngs-disambiguate| image:: https://quay.io/repository/biocontainers/ngs-disambiguate/status
   :target: https://quay.io/repository/biocontainers/ngs-disambiguate
.. _`ngs-disambiguate/tags`: https://quay.io/repository/biocontainers/ngs-disambiguate?tab=tags


.. raw:: html

    <script>
        var package = "ngs-disambiguate";
        var versions = ["2018.05.03","2018.05.03","2018.05.03","2018.05.03","2018.05.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-disambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-disambiguate/README.html