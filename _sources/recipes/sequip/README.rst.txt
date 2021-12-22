:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequip'
.. highlight: bash

sequip
======

.. conda:recipe:: sequip
   :replaces_section_title:
   :noindex:

   Perl module for biological sequence analysis and supporting utilities..

   :homepage: https://github.com/nawrockie/sequip
   :license: Public Domain
   :recipe: /`sequip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequip/meta.yaml>`_

   


.. conda:package:: sequip

   |downloads_sequip| |docker_sequip|

   :versions:
      
      

      ``0.09-0``,  ``0.08-0``

      

   
   :depends perl: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequip

   and update with::

      conda update sequip

   or use the docker container::

      docker pull quay.io/biocontainers/sequip:<tag>

   (see `sequip/tags`_ for valid values for ``<tag>``)


.. |downloads_sequip| image:: https://img.shields.io/conda/dn/bioconda/sequip.svg?style=flat
   :target: https://anaconda.org/bioconda/sequip
   :alt:   (downloads)
.. |docker_sequip| image:: https://quay.io/repository/biocontainers/sequip/status
   :target: https://quay.io/repository/biocontainers/sequip
.. _`sequip/tags`: https://quay.io/repository/biocontainers/sequip?tab=tags


.. raw:: html

    <script>
        var package = "sequip";
        var versions = ["0.09","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequip/README.html