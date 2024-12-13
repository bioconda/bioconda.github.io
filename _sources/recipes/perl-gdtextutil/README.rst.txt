:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdtextutil'
.. highlight: bash

perl-gdtextutil
===============

.. conda:recipe:: perl-gdtextutil
   :replaces_section_title:
   :noindex:

   Text utilities for use with GD

   :homepage: http://metacpan.org/pod/GDTextUtil
   :license: unknown
   :recipe: /`perl-gdtextutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdtextutil/meta.yaml>`_

   


.. conda:package:: perl-gdtextutil

   |downloads_perl-gdtextutil| |docker_perl-gdtextutil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.86-9</code>,  <code>0.86-8</code>,  <code>0.86-7</code>,  <code>0.86-6</code>,  <code>0.86-5</code>,  <code>0.86-4</code>,  <code>0.86-3</code>,  <code>0.86-2</code>,  <code>0.86-1</code>,  </span></summary>
      

      ``0.86-9``,  ``0.86-8``,  ``0.86-7``,  ``0.86-6``,  ``0.86-5``,  ``0.86-4``,  ``0.86-3``,  ``0.86-2``,  ``0.86-1``,  ``0.86-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-gd: 
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

      mamba install perl-gdtextutil

   and update with::

      mamba update perl-gdtextutil

  To create a new environment, run::

      mamba create --name myenvname perl-gdtextutil

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-gdtextutil:<tag>

   (see `perl-gdtextutil/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gdtextutil| image:: https://img.shields.io/conda/dn/bioconda/perl-gdtextutil.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gdtextutil
   :alt:   (downloads)
.. |docker_perl-gdtextutil| image:: https://quay.io/repository/biocontainers/perl-gdtextutil/status
   :target: https://quay.io/repository/biocontainers/perl-gdtextutil
.. _`perl-gdtextutil/tags`: https://quay.io/repository/biocontainers/perl-gdtextutil?tab=tags


.. raw:: html

    <script>
        var package = "perl-gdtextutil";
        var versions = ["0.86","0.86","0.86","0.86","0.86"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdtextutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdtextutil/README.html