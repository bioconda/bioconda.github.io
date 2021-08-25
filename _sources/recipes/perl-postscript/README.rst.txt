:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-postscript'
.. highlight: bash

perl-postscript
===============

.. conda:recipe:: perl-postscript
   :replaces_section_title:
   :noindex:

   helper module for PostScript\:\:TextBlock

   :homepage: http://metacpan.org/pod/PostScript
   :license: unknown
   :recipe: /`perl-postscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript/meta.yaml>`_

   


.. conda:package:: perl-postscript

   |downloads_perl-postscript| |docker_perl-postscript|

   :versions:
      
      

      ``0.06-2``,  ``0.06-1``,  ``0.06-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-postscript

   and update with::

      conda update perl-postscript

   or use the docker container::

      docker pull quay.io/biocontainers/perl-postscript:<tag>

   (see `perl-postscript/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-postscript| image:: https://img.shields.io/conda/dn/bioconda/perl-postscript.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-postscript
   :alt:   (downloads)
.. |docker_perl-postscript| image:: https://quay.io/repository/biocontainers/perl-postscript/status
   :target: https://quay.io/repository/biocontainers/perl-postscript
.. _`perl-postscript/tags`: https://quay.io/repository/biocontainers/perl-postscript?tab=tags


.. raw:: html

    <script>
        var package = "perl-postscript";
        var versions = ["0.06","0.06","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-postscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-postscript/README.html