:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-btlib'
.. highlight: bash

perl-btlib
==========

.. conda:recipe:: perl-btlib/0.19
   :replaces_section_title:
   :noindex:

   Binary Search Tree library

   :homepage: https://sourceforge.net/projects/estscan/files/BTLib
   :license: open source
   :recipe: /`perl-btlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib>`_/`0.19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19/meta.yaml>`_

   


.. conda:package:: perl-btlib

   |downloads_perl-btlib| |docker_perl-btlib|

   :versions:
      
      

      ``0.19-1``,  ``0.19-0``

      

   
   :depends perl: ``5.22.0*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-btlib

   and update with::

      conda update perl-btlib

   or use the docker container::

      docker pull quay.io/biocontainers/perl-btlib:<tag>

   (see `perl-btlib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-btlib| image:: https://img.shields.io/conda/dn/bioconda/perl-btlib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-btlib
   :alt:   (downloads)
.. |docker_perl-btlib| image:: https://quay.io/repository/biocontainers/perl-btlib/status
   :target: https://quay.io/repository/biocontainers/perl-btlib
.. _`perl-btlib/tags`: https://quay.io/repository/biocontainers/perl-btlib?tab=tags


.. raw:: html

    <script>
        var package = "perl-btlib";
        var versions = ["0.19","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-btlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-btlib/README.html