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
      

   
   :depends on gff3sort: 
   :depends on libcxx: ``>=15.0.7``
   :depends on nodejs: ``>=15.14.0,<16.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bio-featureio: 
   :depends on perl-bio-gff3: 
   :depends on perl-bioperl: 
   :depends on perl-capture-tiny: 
   :depends on perl-db-file: 
   :depends on perl-devel-size: 
   :depends on perl-digest-crc32: 
   :depends on perl-exporter-tiny: 
   :depends on perl-file-copy-recursive: 
   :depends on perl-file-next: 
   :depends on perl-hash-merge: 
   :depends on perl-heap-simple: 
   :depends on perl-io-uncompress-gunzip: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on perl-local-lib: 
   :depends on perl-perlio-gzip: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-test-deep: 
   :depends on perl-test-simple: 
   :depends on perl-test-warn: 
   :depends on perl-uri: ``5.17.*``
   :depends on python_abi: ``2.7.* *_cp27m``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install jbrowse

to add into an existing workspace instead, run::

    pixi add jbrowse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jbrowse

Alternatively, to install into a new environment, run::

    conda create -n envname jbrowse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jbrowse:<tag>

(see `jbrowse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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