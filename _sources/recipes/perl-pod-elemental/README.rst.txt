:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-elemental'
.. highlight: bash

perl-pod-elemental
==================

.. conda:recipe:: perl-pod-elemental
   :replaces_section_title:
   :noindex:

   work with nestable Pod elements

   :homepage: https://github.com/rjbs/Pod-Elemental
   :license: perl_5
   :recipe: /`perl-pod-elemental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-elemental/meta.yaml>`_

   


.. conda:package:: perl-pod-elemental

   |downloads_perl-pod-elemental| |docker_perl-pod-elemental|

   :versions:
      
      

      ``0.103004-4``,  ``0.103004-3``,  ``0.103004-2``,  ``0.103004-1``,  ``0.103004-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-mixin-linewise: 
   :depends perl-moose: ``2.2201.*``
   :depends perl-moosex-types: 
   :depends perl-scalar-list-utils: 
   :depends perl-string-rewriteprefix: 
   :depends perl-string-truncate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-elemental

   and update with::

      conda update perl-pod-elemental

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-elemental:<tag>

   (see `perl-pod-elemental/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-elemental| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-elemental.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-elemental
   :alt:   (downloads)
.. |docker_perl-pod-elemental| image:: https://quay.io/repository/biocontainers/perl-pod-elemental/status
   :target: https://quay.io/repository/biocontainers/perl-pod-elemental
.. _`perl-pod-elemental/tags`: https://quay.io/repository/biocontainers/perl-pod-elemental?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-elemental";
        var versions = ["0.103004","0.103004","0.103004","0.103004","0.103004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-elemental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-elemental/README.html