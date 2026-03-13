:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemini'
.. highlight: bash

gemini
======

.. conda:recipe:: gemini
   :replaces_section_title:
   :noindex:

   a lightweight db framework for disease and population genetics.

   :homepage: https://github.com/arq5x/gemini
   :license: MIT License
   :recipe: /`gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini/meta.yaml>`_
   :links: biotools: :biotools:`GEMINI`, doi: :doi:`10.1371/journal.pcbi.1003153`

   


.. conda:package:: gemini

   |downloads_gemini| |docker_gemini|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.2-6</code>,  <code>0.30.2-5</code>,  <code>0.30.2-4</code>,  <code>0.30.2-3</code>,  <code>0.30.2-2</code>,  <code>0.30.2-1</code>,  <code>0.30.2-0</code>,  <code>0.30.1-0</code>,  <code>0.20.1-7</code>,  </span></summary>
      

      ``0.30.2-6``,  ``0.30.2-5``,  ``0.30.2-4``,  ``0.30.2-3``,  ``0.30.2-2``,  ``0.30.2-1``,  ``0.30.2-0``,  ``0.30.1-0``,  ``0.20.1-7``,  ``0.20.1-6``,  ``0.20.1-5``,  ``0.20.1-4``,  ``0.20.1-3``,  ``0.20.1-2``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.20.0a0-0``,  ``0.19.2a-2``,  ``0.19.2a-1``,  ``0.19.2a-0``,  ``0.19.1-3``,  ``0.19.1-2``,  ``0.19.1-1``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.3-1``,  ``0.18.2-1``,  ``0.18.1-3``,  ``0.18.1-2``,  ``0.18.1-1``,  ``0.18.0-8``,  ``0.18.0-7``,  ``0.18.0-6``,  ``0.18.0-5``,  ``0.18.0-4``,  ``0.18a-4``,  ``0.17.3dev1-4``,  ``0.17.3dev1-3``,  ``0.17.3dev0-2``,  ``0.17.3dev0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bcolz: 
   :depends on bottle: 
   :depends on bx-python: ``>=0.11.0,<0.12.0a0``
   :depends on cyvcf2: ``>0.6.5``
   :depends on cyvcf2: ``>=0.30.28,<0.31.0a0``
   :depends on geneimpacts: 
   :depends on grabix: 
   :depends on inheritance: 
   :depends on ipyparallel: 
   :depends on ipython-cluster-helper: 
   :depends on jinja2: 
   :depends on libgcc-ng: ``>=12``
   :depends on networkx: 
   :depends on numexpr: 
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pybedtools: ``>=0.10.0,<0.11.0a0``
   :depends on pysam: ``>=0.22``
   :depends on pysam: ``>=0.22.0,<0.23.0a0``
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on python-snappy: 
   :depends on python_abi: ``3.8.* *_cp38``
   :depends on pyyaml: 
   :depends on scipy: 
   :depends on snappy: ``>=1.2.0,<1.3.0a0``
   :depends on sqlalchemy: 
   :depends on unidecode: 
   :depends on wget: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install gemini

to add into an existing workspace instead, run::

    pixi add gemini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gemini

Alternatively, to install into a new environment, run::

    conda create -n envname gemini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gemini:<tag>

(see `gemini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gemini| image:: https://img.shields.io/conda/dn/bioconda/gemini.svg?style=flat
   :target: https://anaconda.org/bioconda/gemini
   :alt:   (downloads)
.. |docker_gemini| image:: https://quay.io/repository/biocontainers/gemini/status
   :target: https://quay.io/repository/biocontainers/gemini
.. _`gemini/tags`: https://quay.io/repository/biocontainers/gemini?tab=tags


.. raw:: html

    <script>
        var package = "gemini";
        var versions = ["0.30.2","0.30.2","0.30.2","0.30.2","0.30.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemini/README.html