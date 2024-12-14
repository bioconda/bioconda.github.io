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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.103006-2</code>,  <code>0.103006-1</code>,  <code>0.103006-0</code>,  <code>0.103005-1</code>,  <code>0.103005-0</code>,  <code>0.103004-5</code>,  <code>0.103004-4</code>,  <code>0.103004-3</code>,  <code>0.103004-2</code>,  </span></summary>
      

      ``0.103006-2``,  ``0.103006-1``,  ``0.103006-0``,  ``0.103005-1``,  ``0.103005-0``,  ``0.103004-5``,  ``0.103004-4``,  ``0.103004-3``,  ``0.103004-2``,  ``0.103004-1``,  ``0.103004-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-mixin-linewise: 
   :depends perl-moose: ``2.2207.*``
   :depends perl-moosex-types: 
   :depends perl-pod-eventual: ``0.094003.*``
   :depends perl-scalar-list-utils: 
   :depends perl-string-rewriteprefix: 
   :depends perl-string-truncate: 
   :depends perl-test-differences: ``0.71.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-pod-elemental

   and update with::

      mamba update perl-pod-elemental

  To create a new environment, run::

      mamba create --name myenvname perl-pod-elemental

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.103006","0.103006","0.103006","0.103005","0.103005"];
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