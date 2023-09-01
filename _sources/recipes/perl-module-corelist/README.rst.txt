:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-corelist'
.. highlight: bash

perl-module-corelist
====================

.. conda:recipe:: perl-module-corelist
   :replaces_section_title:
   :noindex:

   what modules shipped with versions of perl

   :homepage: https://metacpan.org/pod/Module::CoreList
   :license: perl_5
   :recipe: /`perl-module-corelist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist/meta.yaml>`_

   


.. conda:package:: perl-module-corelist

   |downloads_perl-module-corelist| |docker_perl-module-corelist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.20220620-0</code>,  <code>5.20220527-0</code>,  <code>5.20220420-0</code>,  <code>5.20220320-0</code>,  <code>5.20220313-0</code>,  <code>5.20220220-0</code>,  <code>5.20220120-0</code>,  <code>5.20190524-1</code>,  <code>5.20190524-0</code>,  </span></summary>
      

      ``5.20220620-0``,  ``5.20220527-0``,  ``5.20220420-0``,  ``5.20220320-0``,  ``5.20220313-0``,  ``5.20220220-0``,  ``5.20220120-0``,  ``5.20190524-1``,  ``5.20190524-0``,  ``5.20190420-0``,  ``5.20181218-0``,  ``5.20181130-0``,  ``5.20180820-0``,  ``5.20180626-0``,  ``5.20180120-1``,  ``5.20180120-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-version: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-module-corelist

   and update with::

      mamba update perl-module-corelist

  To create a new environment, run::

      mamba create --name myenvname perl-module-corelist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-corelist:<tag>

   (see `perl-module-corelist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-corelist| image:: https://img.shields.io/conda/dn/bioconda/perl-module-corelist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-corelist
   :alt:   (downloads)
.. |docker_perl-module-corelist| image:: https://quay.io/repository/biocontainers/perl-module-corelist/status
   :target: https://quay.io/repository/biocontainers/perl-module-corelist
.. _`perl-module-corelist/tags`: https://quay.io/repository/biocontainers/perl-module-corelist?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-corelist";
        var versions = ["5.20220620","5.20220527","5.20220420","5.20220320","5.20220313"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-corelist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-corelist/README.html