:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_finder'
.. highlight: bash

ltr_finder
==========

.. conda:recipe:: ltr_finder
   :replaces_section_title:
   :noindex:

   LTR\_Finder is an efficient program for finding full\-length LTR retrotranspsons in genome sequences.

   :homepage: https://github.com/NBISweden/LTR_Finder/
   :license: MIT
   :recipe: /`ltr_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_finder/meta.yaml>`_

   


.. conda:package:: ltr_finder

   |downloads_ltr_finder| |docker_ltr_finder|

   :versions:
      
      

      ``1.07-3``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends perl-gd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ltr_finder

   and update with::

      conda update ltr_finder

   or use the docker container::

      docker pull quay.io/biocontainers/ltr_finder:<tag>

   (see `ltr_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_ltr_finder| image:: https://img.shields.io/conda/dn/bioconda/ltr_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_finder
   :alt:   (downloads)
.. |docker_ltr_finder| image:: https://quay.io/repository/biocontainers/ltr_finder/status
   :target: https://quay.io/repository/biocontainers/ltr_finder
.. _`ltr_finder/tags`: https://quay.io/repository/biocontainers/ltr_finder?tab=tags


.. raw:: html

    <script>
        var package = "ltr_finder";
        var versions = ["1.07","1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_finder/README.html