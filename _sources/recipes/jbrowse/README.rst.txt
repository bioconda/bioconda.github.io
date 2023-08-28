:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jbrowse'
.. highlight: bash

jbrowse
=======

.. conda:recipe:: jbrowse
   :replaces_section_title:
   :noindex:

   The JBrowse Genome Browser

   :homepage: https://jbrowse.org/
   :license: LGPL
   :recipe: /`jbrowse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse/meta.yaml>`_
   :links: biotools: :biotools:`jbrowse`, doi: :doi:`10.1101/gr.094607.109`

   


.. conda:package:: jbrowse

   |downloads_jbrowse| |docker_jbrowse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.11-6</code>,  <code>1.16.11-5</code>,  <code>1.16.11-4</code>,  <code>1.16.11-3</code>,  <code>1.16.11-2</code>,  <code>1.16.11-1</code>,  <code>1.16.11-0</code>,  <code>1.16.10-0</code>,  <code>1.16.9-0</code>,  </span></summary>
      

      ``1.16.11-6``,  ``1.16.11-5``,  ``1.16.11-4``,  ``1.16.11-3``,  ``1.16.11-2``,  ``1.16.11-1``,  ``1.16.11-0``,  ``1.16.10-0``,  ``1.16.9-0``,  ``1.16.8-0``,  ``1.16.6-1``,  ``1.16.6-0``,  ``1.16.5-0``,  ``1.16.4-0``,  ``1.16.2-7``,  ``1.16.2-6``,  ``1.16.2-5``,  ``1.16.2-4``,  ``1.16.1-4``,  ``1.16.1-3``,  ``1.16.1-2``,  ``1.16.1-1``,  ``1.16.1-0``,  ``1.15.4-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.12.5-2``,  ``1.12.5-0``,  ``1.12.3-0``,  ``1.12.1-3``,  ``1.12.1-2``,  ``1.12.1-1``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gff3sort: 
   :depends libcxx: ``>=15.0.7``
   :depends nodejs: ``>=15.14.0,<16.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-featureio: 
   :depends perl-bio-gff3: 
   :depends perl-bioperl: 
   :depends perl-capture-tiny: 
   :depends perl-db-file: 
   :depends perl-devel-size: 
   :depends perl-digest-crc32: 
   :depends perl-exporter-tiny: 
   :depends perl-file-copy-recursive: 
   :depends perl-file-next: 
   :depends perl-hash-merge: 
   :depends perl-heap-simple: 
   :depends perl-io-uncompress-gunzip: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-local-lib: 
   :depends perl-perlio-gzip: 
   :depends perl-scalar-list-utils: 
   :depends perl-test-deep: 
   :depends perl-test-simple: 
   :depends perl-test-warn: 
   :depends perl-uri: ``5.17.*``
   :depends python_abi: ``2.7.* *_cp27m``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jbrowse

   and update with::

      mamba update jbrowse

  To create a new environment, run::

      mamba create --name myenvname jbrowse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jbrowse:<tag>

   (see `jbrowse/tags`_ for valid values for ``<tag>``)


.. |downloads_jbrowse| image:: https://img.shields.io/conda/dn/bioconda/jbrowse.svg?style=flat
   :target: https://anaconda.org/bioconda/jbrowse
   :alt:   (downloads)
.. |docker_jbrowse| image:: https://quay.io/repository/biocontainers/jbrowse/status
   :target: https://quay.io/repository/biocontainers/jbrowse
.. _`jbrowse/tags`: https://quay.io/repository/biocontainers/jbrowse?tab=tags


.. raw:: html

    <script>
        var package = "jbrowse";
        var versions = ["1.16.11","1.16.11","1.16.11","1.16.11","1.16.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jbrowse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jbrowse/README.html