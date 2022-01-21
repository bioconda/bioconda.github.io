:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-readonly'
.. highlight: bash

perl-readonly
=============

.. conda:recipe:: perl-readonly
   :replaces_section_title:
   :noindex:

   Facility for creating read\-only scalars\, arrays\, hashes

   :homepage: https://github.com/sanko/readonly
   :license: perl_5
   :recipe: /`perl-readonly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-readonly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-readonly/meta.yaml>`_

   


.. conda:package:: perl-readonly

   |downloads_perl-readonly| |docker_perl-readonly|

   :versions:
      
      

      ``2.05-1``,  ``2.05-0``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-readonly

   and update with::

      conda update perl-readonly

   or use the docker container::

      docker pull quay.io/biocontainers/perl-readonly:<tag>

   (see `perl-readonly/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-readonly| image:: https://img.shields.io/conda/dn/bioconda/perl-readonly.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-readonly
   :alt:   (downloads)
.. |docker_perl-readonly| image:: https://quay.io/repository/biocontainers/perl-readonly/status
   :target: https://quay.io/repository/biocontainers/perl-readonly
.. _`perl-readonly/tags`: https://quay.io/repository/biocontainers/perl-readonly?tab=tags


.. raw:: html

    <script>
        var package = "perl-readonly";
        var versions = ["2.05","2.05","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-readonly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-readonly/README.html