:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-uuid'
.. highlight: bash

perl-data-uuid
==============

.. conda:recipe:: perl-data-uuid
   :replaces_section_title:
   :noindex:

   Globally\/Universally Unique Identifiers \(GUIDs\/UUIDs\).

   :homepage: https://metacpan.org/pod/Data::UUID
   :license: BSD
   :recipe: /`perl-data-uuid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-uuid/meta.yaml>`_

   


.. conda:package:: perl-data-uuid

   |downloads_perl-data-uuid| |docker_perl-data-uuid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.227-1</code>,  <code>1.227-0</code>,  <code>1.226-4</code>,  <code>1.226-3</code>,  <code>1.226-2</code>,  <code>1.226-1</code>,  <code>1.226-0</code>,  <code>1.224-1</code>,  <code>1.224-0</code>,  </span></summary>
      

      ``1.227-1``,  ``1.227-0``,  ``1.226-4``,  ``1.226-3``,  ``1.226-2``,  ``1.226-1``,  ``1.226-0``,  ``1.224-1``,  ``1.224-0``,  ``1.221-5``,  ``1.221-4``,  ``1.221-3``,  ``1.221-2``,  ``1.221-1``,  ``1.221-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-digest-md5: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-data-uuid

   and update with::

      mamba update perl-data-uuid

  To create a new environment, run::

      mamba create --name myenvname perl-data-uuid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-uuid:<tag>

   (see `perl-data-uuid/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-uuid| image:: https://img.shields.io/conda/dn/bioconda/perl-data-uuid.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-uuid
   :alt:   (downloads)
.. |docker_perl-data-uuid| image:: https://quay.io/repository/biocontainers/perl-data-uuid/status
   :target: https://quay.io/repository/biocontainers/perl-data-uuid
.. _`perl-data-uuid/tags`: https://quay.io/repository/biocontainers/perl-data-uuid?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-uuid";
        var versions = ["1.227","1.227","1.226","1.226","1.226"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-uuid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-uuid/README.html