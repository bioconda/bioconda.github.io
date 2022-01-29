:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-namespace-clean'
.. highlight: bash

perl-namespace-clean
====================

.. conda:recipe:: perl-namespace-clean/0.27
   :replaces_section_title:
   :noindex:

   Keep imports and functions out of your namespace

   :homepage: http://search.cpan.org/dist/namespace-clean
   :license: perl_5
   :recipe: /`perl-namespace-clean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean>`_/`0.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean/0.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-namespace-clean/0.27/meta.yaml>`_

   


.. conda:package:: perl-namespace-clean

   |downloads_perl-namespace-clean| |docker_perl-namespace-clean|

   :versions:
      
      

      ``0.27-4``,  ``0.27-3``,  ``0.27-2``,  ``0.27-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-b-hooks-endofscope: 
   :depends perl-package-stash: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-namespace-clean

   and update with::

      conda update perl-namespace-clean

   or use the docker container::

      docker pull quay.io/biocontainers/perl-namespace-clean:<tag>

   (see `perl-namespace-clean/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-namespace-clean| image:: https://img.shields.io/conda/dn/bioconda/perl-namespace-clean.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-namespace-clean
   :alt:   (downloads)
.. |docker_perl-namespace-clean| image:: https://quay.io/repository/biocontainers/perl-namespace-clean/status
   :target: https://quay.io/repository/biocontainers/perl-namespace-clean
.. _`perl-namespace-clean/tags`: https://quay.io/repository/biocontainers/perl-namespace-clean?tab=tags


.. raw:: html

    <script>
        var package = "perl-namespace-clean";
        var versions = ["0.27","0.27","0.27","0.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-namespace-clean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-namespace-clean/README.html