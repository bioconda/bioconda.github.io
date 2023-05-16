:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'balrog'
.. highlight: bash

balrog
======

.. conda:recipe:: balrog
   :replaces_section_title:
   :noindex:

   Balrog\: A universal protein model for prokaryotic gene prediction

   :homepage: https://github.com/Markusjsommer/BalrogCPP
   :license: MIT
   :recipe: /`balrog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/balrog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/balrog/meta.yaml>`_

   


.. conda:package:: balrog

   |downloads_balrog| |docker_balrog|

   :versions:
      
      

      ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.19-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends scipy: 
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install balrog

   and update with::

      conda update balrog

   or use the docker container::

      docker pull quay.io/biocontainers/balrog:<tag>

   (see `balrog/tags`_ for valid values for ``<tag>``)


.. |downloads_balrog| image:: https://img.shields.io/conda/dn/bioconda/balrog.svg?style=flat
   :target: https://anaconda.org/bioconda/balrog
   :alt:   (downloads)
.. |docker_balrog| image:: https://quay.io/repository/biocontainers/balrog/status
   :target: https://quay.io/repository/biocontainers/balrog
.. _`balrog/tags`: https://quay.io/repository/biocontainers/balrog?tab=tags


.. raw:: html

    <script>
        var package = "balrog";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/balrog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/balrog/README.html