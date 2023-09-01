:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biosails'
.. highlight: bash

perl-biosails
=============

.. conda:recipe:: perl-biosails/0.02
   :replaces_section_title:
   :noindex:

   Standard\(ized\) Analysis Information Layers

   :homepage: https://github.com/biosails/BioSAILs
   :license: perl_5
   :recipe: /`perl-biosails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails>`_/`0.02 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails/0.02>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails/0.02/meta.yaml>`_

   


.. conda:package:: perl-biosails

   |downloads_perl-biosails| |docker_perl-biosails|

   :versions:
      
      

      ``0.02-3``,  ``0.02-2``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-config-any: 
   :depends perl-data-dumper: 
   :depends perl-datetime: 
   :depends perl-file-homedir: 
   :depends perl-file-path: 
   :depends perl-file-slurp: 
   :depends perl-file-temp: 
   :depends perl-git-wrapper: 
   :depends perl-git-wrapper-plus: 
   :depends perl-hash-merge: 
   :depends perl-ipc-cmd: 
   :depends perl-moosex-app: 
   :depends perl-moosex-object-pluggable: 
   :depends perl-moosex-types: 
   :depends perl-moosex-types-path-tiny: 
   :depends perl-namespace-autoclean: 
   :depends perl-path-tiny: 
   :depends perl-sort-versions: 
   :depends perl-try-tiny: 
   :depends perl-version-next: 
   :depends perl-yaml: 
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

      mamba install perl-biosails

   and update with::

      mamba update perl-biosails

  To create a new environment, run::

      mamba create --name myenvname perl-biosails

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-biosails:<tag>

   (see `perl-biosails/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-biosails| image:: https://img.shields.io/conda/dn/bioconda/perl-biosails.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biosails
   :alt:   (downloads)
.. |docker_perl-biosails| image:: https://quay.io/repository/biocontainers/perl-biosails/status
   :target: https://quay.io/repository/biocontainers/perl-biosails
.. _`perl-biosails/tags`: https://quay.io/repository/biocontainers/perl-biosails?tab=tags


.. raw:: html

    <script>
        var package = "perl-biosails";
        var versions = ["0.02","0.02","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biosails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biosails/README.html