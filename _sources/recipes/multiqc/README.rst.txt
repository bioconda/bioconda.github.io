:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc'
.. highlight: bash

multiqc
=======

.. conda:recipe:: multiqc
   :replaces_section_title:
   :noindex:

   Aggregate results from bioinformatics analyses across many samples into a single report.

   :homepage: https://seqera.io/multiqc
   :documentation: https://docs.seqera.io/multiqc/
   
   :developer docs: https://github.com/MultiQC/MultiQC
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`multiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc/meta.yaml>`_
   :links: biotools: :biotools:`multiqc`, usegalaxy-eu: :usegalaxy-eu:`multiqc`, doi: :doi:`10.1093/bioinformatics/btw354`

   


.. conda:package:: multiqc

   |downloads_multiqc| |docker_multiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-0</code>,  <code>1.32-2</code>,  <code>1.32-1</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.30-1</code>,  <code>1.30-0</code>,  <code>1.29-0</code>,  <code>1.28-0</code>,  </span></summary>
      

      ``1.33-0``,  ``1.32-2``,  ``1.32-1``,  ``1.32-0``,  ``1.31-0``,  ``1.30-1``,  ``1.30-0``,  ``1.29-0``,  ``1.28-0``,  ``1.27.1-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25.2-0``,  ``1.25.1-0``,  ``1.25-0``,  ``1.24.1-0``,  ``1.24-0``,  ``1.23-0``,  ``1.22.3-0``,  ``1.22.2-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-1``,  ``1.17-0``,  ``1.16-0``,  ``1.15-0``,  ``1.14-0``,  ``1.13-0``,  ``1.13a-1``,  ``1.13a-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.10-1``,  ``1.10-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-4``,  ``1.7-3``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``,  ``1.6-0``,  ``1.6a0-2``,  ``1.6a0-1``,  ``1.6a0-0``,  ``1.5-0``,  ``1.5a-0``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-4``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1a0-4``,  ``0.9.1a0-3``,  ``0.9.1a0-2``,  ``0.9.1a0-1``,  ``0.9.1a0-0``,  ``0.9-0``,  ``0.9a-0``,  ``0.8-0``,  ``0.8dev0-0``,  ``0.7.1dev0-1``,  ``0.7.1dev0-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on coloredlogs: 
   :depends on humanize: 
   :depends on importlib-metadata: 
   :depends on jinja2: ``>=3.0.0``
   :depends on jsonschema: 
   :depends on markdown: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pillow: ``>=10.2.0``
   :depends on plotly: ``>=5.18``
   :depends on polars-lts-cpu: 
   :depends on pyaml-env: 
   :depends on pydantic: ``>=2.7.1``
   :depends on python: ``>=3.8,!=3.14.1``
   :depends on python-dotenv: 
   :depends on python-kaleido: ``0.2.1``
   :depends on pyyaml: ``>=4``
   :depends on requests: 
   :depends on rich: ``>=10``
   :depends on rich-click: 
   :depends on spectra: ``>=0.0.10``
   :depends on tiktoken: 
   :depends on tqdm: 
   :depends on typeguard: 

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

    pixi global install multiqc

to add into an existing workspace instead, run::

    pixi add multiqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install multiqc

Alternatively, to install into a new environment, run::

    conda create -n envname multiqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/multiqc:<tag>

(see `multiqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_multiqc| image:: https://img.shields.io/conda/dn/bioconda/multiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc
   :alt:   (downloads)
.. |docker_multiqc| image:: https://quay.io/repository/biocontainers/multiqc/status
   :target: https://quay.io/repository/biocontainers/multiqc
.. _`multiqc/tags`: https://quay.io/repository/biocontainers/multiqc?tab=tags


.. raw:: html

    <script>
        var package = "multiqc";
        var versions = ["1.33","1.32","1.32","1.32","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc/README.html