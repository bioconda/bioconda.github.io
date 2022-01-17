:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snostrip'
.. highlight: bash

snostrip
========

.. conda:recipe:: snostrip
   :replaces_section_title:
   :noindex:

   Automatic snoRNA annotation pipeline

   :homepage: http://snostrip.bioinf.uni-leipzig.de/help.py
   :license: GPL3
   :recipe: /`snostrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip/meta.yaml>`_

   


.. conda:package:: snostrip

   |downloads_snostrip| |docker_snostrip|

   :versions:
      
      

      ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends blast-legacy: 
   :depends infernal: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends muscle: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends viennarna: ``>=2.5.0,<2.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snostrip

   and update with::

      conda update snostrip

   or use the docker container::

      docker pull quay.io/biocontainers/snostrip:<tag>

   (see `snostrip/tags`_ for valid values for ``<tag>``)


.. |downloads_snostrip| image:: https://img.shields.io/conda/dn/bioconda/snostrip.svg?style=flat
   :target: https://anaconda.org/bioconda/snostrip
   :alt:   (downloads)
.. |docker_snostrip| image:: https://quay.io/repository/biocontainers/snostrip/status
   :target: https://quay.io/repository/biocontainers/snostrip
.. _`snostrip/tags`: https://quay.io/repository/biocontainers/snostrip?tab=tags


.. raw:: html

    <script>
        var package = "snostrip";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snostrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snostrip/README.html