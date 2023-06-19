:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viguno'
.. highlight: bash

viguno
======

.. conda:recipe:: viguno
   :replaces_section_title:
   :noindex:

   Lookup OMIM genes and HPO terms and compute similarities

   :homepage: https://github.com/bihealth/viguno
   :license: MIT
   :recipe: /`viguno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viguno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viguno/meta.yaml>`_

   


.. conda:package:: viguno

   |downloads_viguno| |docker_viguno|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.42.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.1,<4.0a0``
   :depends sqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install viguno

   and update with::

      conda update viguno

   or use the docker container::

      docker pull quay.io/biocontainers/viguno:<tag>

   (see `viguno/tags`_ for valid values for ``<tag>``)


.. |downloads_viguno| image:: https://img.shields.io/conda/dn/bioconda/viguno.svg?style=flat
   :target: https://anaconda.org/bioconda/viguno
   :alt:   (downloads)
.. |docker_viguno| image:: https://quay.io/repository/biocontainers/viguno/status
   :target: https://quay.io/repository/biocontainers/viguno
.. _`viguno/tags`: https://quay.io/repository/biocontainers/viguno?tab=tags


.. raw:: html

    <script>
        var package = "viguno";
        var versions = ["0.1.6","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viguno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viguno/README.html