:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-app'
.. highlight: bash

perl-moosex-app
===============

.. conda:recipe:: perl-moosex-app
   :replaces_section_title:
   :noindex:

   Write user\-friendly command line apps with even less suffering.

   :homepage: https://metacpan.org/pod/MooseX::App
   :license: perl_5
   :recipe: /`perl-moosex-app <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app/meta.yaml>`_

   


.. conda:package:: perl-moosex-app

   |downloads_perl-moosex-app| |docker_perl-moosex-app|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3701-2</code>,  <code>1.3701-1</code>,  <code>1.3701-0</code>,  <code>1.43-0</code>,  <code>1.42-0</code>,  <code>1.39-4</code>,  <code>1.39-3</code>,  <code>1.39-2</code>,  <code>1.39-1</code>,  </span></summary>
      

      ``1.3701-2``,  ``1.3701-1``,  ``1.3701-0``,  ``1.43-0``,  ``1.42-0``,  ``1.39-4``,  ``1.39-3``,  ``1.39-2``,  ``1.39-1``,  ``1.39-0``,  ``1.35-2``,  ``1.35-1``,  ``1.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-config-any: 
   :depends perl-file-homedir: 
   :depends perl-io-interactive: 
   :depends perl-moose: 
   :depends perl-moosex-types-path-class: 
   :depends perl-path-class: 
   :depends perl-pod-elemental: 
   :depends perl-scalar-list-utils: 
   :depends perl-termreadkey: 
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

      mamba install perl-moosex-app

   and update with::

      mamba update perl-moosex-app

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-app

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-app:<tag>

   (see `perl-moosex-app/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-app| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-app
   :alt:   (downloads)
.. |docker_perl-moosex-app| image:: https://quay.io/repository/biocontainers/perl-moosex-app/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app
.. _`perl-moosex-app/tags`: https://quay.io/repository/biocontainers/perl-moosex-app?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-app";
        var versions = ["1.3701","1.3701","1.3701","1.43","1.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app/README.html