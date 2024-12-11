:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-map'
.. highlight: bash

perl-unicode-map
================

.. conda:recipe:: perl-unicode-map
   :replaces_section_title:
   :noindex:

   An utility to map texts from and to unicode

   :homepage: http://metacpan.org/pod/Unicode::Map
   :license: unknown
   :recipe: /`perl-unicode-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map/meta.yaml>`_

   


.. conda:package:: perl-unicode-map

   |downloads_perl-unicode-map| |docker_perl-unicode-map|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.112-9</code>,  <code>0.112-8</code>,  <code>0.112-7</code>,  <code>0.112-6</code>,  <code>0.112-5</code>,  <code>0.112-4</code>,  <code>0.112-3</code>,  <code>0.112-2</code>,  <code>0.112-1</code>,  </span></summary>
      

      ``0.112-9``,  ``0.112-8``,  ``0.112-7``,  ``0.112-6``,  ``0.112-5``,  ``0.112-4``,  ``0.112-3``,  ``0.112-2``,  ``0.112-1``,  ``0.112-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-unicode-map

   and update with::

      mamba update perl-unicode-map

  To create a new environment, run::

      mamba create --name myenvname perl-unicode-map

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-map:<tag>

   (see `perl-unicode-map/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-map| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-map.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-map
   :alt:   (downloads)
.. |docker_perl-unicode-map| image:: https://quay.io/repository/biocontainers/perl-unicode-map/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-map
.. _`perl-unicode-map/tags`: https://quay.io/repository/biocontainers/perl-unicode-map?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-map";
        var versions = ["0.112","0.112","0.112","0.112","0.112"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-map/README.html