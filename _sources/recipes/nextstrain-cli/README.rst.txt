:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain-cli'
.. highlight: bash

nextstrain-cli
==============

.. conda:recipe:: nextstrain-cli
   :replaces_section_title:
   :noindex:

   The Nextstrain command\-line interface \(CLI\).

   :homepage: https://docs.nextstrain.org/projects/cli
   :developer docs: https://github.com/nextstrain/cli
   :license: MIT / MIT
   :recipe: /`nextstrain-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain-cli/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty407`

   The Nextstrain command\-line interface \(CLI\)—a program called
   nextstrain—aims to provide a consistent way to run and visualize pathogen
   builds and access Nextstrain components like Augur and Auspice across
   computing environments such as Docker\, Conda\, and AWS Batch.



.. conda:package:: nextstrain-cli

   |downloads_nextstrain-cli| |docker_nextstrain-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.4.2-0</code>,  <code>10.4.1-0</code>,  <code>10.3.0-0</code>,  <code>10.2.1.post1-0</code>,  <code>10.2.0-0</code>,  <code>9.0.0-1</code>,  <code>9.0.0-0</code>,  <code>8.5.4-1</code>,  <code>8.5.4-0</code>,  </span></summary>
      

      ``10.4.2-0``,  ``10.4.1-0``,  ``10.3.0-0``,  ``10.2.1.post1-0``,  ``10.2.0-0``,  ``9.0.0-1``,  ``9.0.0-0``,  ``8.5.4-1``,  ``8.5.4-0``,  ``8.5.3-0``,  ``8.5.2-0``,  ``8.5.1-0``,  ``8.5.0-0``,  ``8.2.0-0``,  ``8.0.1-0``,  ``8.0.0-0``,  ``7.4.0-1``,  ``7.4.0-0``,  ``7.3.0.post1-0``,  ``7.2.0-0``,  ``7.1.0-0``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.2.1-0``,  ``6.2.0-1``,  ``6.2.0-0``,  ``6.1.0.post1-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.0-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: 
   :depends on cryptography: 
   :depends on docutils: 
   :depends on fasteners: 
   :depends on fsspec: ``!=2023.9.1``
   :depends on jsonschema: ``>=4``
   :depends on packaging: 
   :depends on pyjwt: ``>=2.0.0``
   :depends on pyparsing: ``>=3.0.0``
   :depends on python: ``>=3.8``
   :depends on pyyaml: ``>=5.3.1``
   :depends on requests: 
   :depends on s3fs: ``>=2021.04.0,!=2023.9.1``
   :depends on typing_extensions: ``>=3.7.4``
   :depends on urllib3: ``>=2.0.0``
   :depends on wcmatch: ``>=6.0``
   :depends on wrapt: 

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

    pixi global install nextstrain-cli

to add into an existing workspace instead, run::

    pixi add nextstrain-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextstrain-cli

Alternatively, to install into a new environment, run::

    conda create -n envname nextstrain-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextstrain-cli:<tag>

(see `nextstrain-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextstrain-cli| image:: https://img.shields.io/conda/dn/bioconda/nextstrain-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain-cli
   :alt:   (downloads)
.. |docker_nextstrain-cli| image:: https://quay.io/repository/biocontainers/nextstrain-cli/status
   :target: https://quay.io/repository/biocontainers/nextstrain-cli
.. _`nextstrain-cli/tags`: https://quay.io/repository/biocontainers/nextstrain-cli?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain-cli";
        var versions = ["10.4.2","10.4.1","10.3.0","10.2.1.post1","10.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain-cli/README.html