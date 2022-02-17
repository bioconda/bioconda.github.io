:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-object'
.. highlight: bash

perl-set-object
===============

.. conda:recipe:: perl-set-object
   :replaces_section_title:
   :noindex:

   Unordered collections \(sets\) of Perl Objects

   :homepage: http://metacpan.org/pod/Set-Object
   :license: artistic_2
   :recipe: /`perl-set-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-object>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-object/meta.yaml>`_

   


.. conda:package:: perl-set-object

   |downloads_perl-set-object| |docker_perl-set-object|

   :versions:
      
      

      ``1.42-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-set-object

   and update with::

      conda update perl-set-object

   or use the docker container::

      docker pull quay.io/biocontainers/perl-set-object:<tag>

   (see `perl-set-object/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-set-object| image:: https://img.shields.io/conda/dn/bioconda/perl-set-object.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-object
   :alt:   (downloads)
.. |docker_perl-set-object| image:: https://quay.io/repository/biocontainers/perl-set-object/status
   :target: https://quay.io/repository/biocontainers/perl-set-object
.. _`perl-set-object/tags`: https://quay.io/repository/biocontainers/perl-set-object?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-object";
        var versions = ["1.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-object/README.html