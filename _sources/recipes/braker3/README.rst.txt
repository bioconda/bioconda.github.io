:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braker3'
.. highlight: bash

braker3
=======

.. conda:recipe:: braker3
   :replaces_section_title:
   :noindex:

   BRAKER3 is the latest pipeline in the BRAKER suite

   :homepage: https://github.com/Gaius-Augustus/BRAKER
   :license: Other / Artistic License
   :recipe: /`braker3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker3/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.01.13.524024`

   BRAKER3 enables the usage of RNA\-seq and protein data in a fully automated pipeline to train and predict highly reliable genes with GeneMark\-ETP and AUGUSTUS. The result of the pipeline is the combined gene set of both gene prediction tools\, which only contains genes with very high support from extrinsic evidence.


.. conda:package:: braker3

   |downloads_braker3| |docker_braker3|

   :versions:
      
      

      ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.3-0``

      

   
   :depends augustus: ``>=3.5.0``
   :depends bamtools: ``>=2.5.1``
   :depends biopython: 
   :depends blast: ``>=2.12.0``
   :depends cdbtools: ``>=0.99``
   :depends compleasm: 
   :depends diamond: ``>=2.1.6``
   :depends exonerate: ``>=2.2.0``
   :depends genomethreader: ``>=1.7.0``
   :depends makehub: 
   :depends perl: 
   :depends perl-app-cpanminus: 
   :depends perl-class-data-inheritable: 
   :depends perl-data-dumper: 
   :depends perl-exception-class: 
   :depends perl-file-homedir: 
   :depends perl-file-spec: 
   :depends perl-file-which: 
   :depends perl-hash-merge: 
   :depends perl-logger-simple: 
   :depends perl-math-utils: 
   :depends perl-mce: 
   :depends perl-module-load-conditional: 
   :depends perl-parallel-forkmanager: 
   :depends perl-posix: 
   :depends perl-scalar-list-utils: 
   :depends perl-scalar-util-numeric: 
   :depends perl-test-pod: 
   :depends perl-yaml: 
   :depends perl-yaml-libyaml: 
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.14``
   :depends spaln: ``>=2.4.8``
   :depends tsebra: 
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

      mamba install braker3

   and update with::

      mamba update braker3

  To create a new environment, run::

      mamba create --name myenvname braker3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/braker3:<tag>

   (see `braker3/tags`_ for valid values for ``<tag>``)


.. |downloads_braker3| image:: https://img.shields.io/conda/dn/bioconda/braker3.svg?style=flat
   :target: https://anaconda.org/bioconda/braker3
   :alt:   (downloads)
.. |docker_braker3| image:: https://quay.io/repository/biocontainers/braker3/status
   :target: https://quay.io/repository/biocontainers/braker3
.. _`braker3/tags`: https://quay.io/repository/biocontainers/braker3?tab=tags


.. raw:: html

    <script>
        var package = "braker3";
        var versions = ["3.0.7","3.0.6","3.0.3"];
    </script>





Notes
-----
- GeneMark software can be used for free\, but requires a license file and should be additionally installed on the machine where the BRAKER3 environment is.

- ProtHint software can be used for free\, but doesn\'t allow redistribution and should be additionally installed on the machine where the BRAKER3 environment is.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker3/README.html