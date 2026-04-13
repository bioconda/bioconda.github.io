:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ariba'
.. highlight: bash

ariba
=====

.. conda:recipe:: ariba
   :replaces_section_title:
   :noindex:

   ARIBA\: Antibiotic Resistance Identification By Assembly.

   :homepage: https://github.com/sanger-pathogens/ariba
   :documentation: https://sanger-pathogens.github.io/ariba
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ariba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ariba/meta.yaml>`_

   


.. conda:package:: ariba

   |downloads_ariba| |docker_ariba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.7-0</code>,  <code>2.14.6-6</code>,  <code>2.14.6-5</code>,  <code>2.14.6-4</code>,  <code>2.14.6-3</code>,  <code>2.14.6-2</code>,  <code>2.14.6-0</code>,  <code>2.14.5-2</code>,  <code>2.14.5-1</code>,  </span></summary>
      

      ``2.14.7-0``,  ``2.14.6-6``,  ``2.14.6-5``,  ``2.14.6-4``,  ``2.14.6-3``,  ``2.14.6-2``,  ``2.14.6-0``,  ``2.14.5-2``,  ``2.14.5-1``,  ``2.14.5-0``,  ``2.14.4-0``,  ``2.14.3-1``,  ``2.14.3-0``,  ``2.14.1-0``,  ``2.13.5-0``,  ``2.13.3-0``,  ``2.13.2-0``,  ``2.12.1-0``,  ``2.12.0-2``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.5.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.2``
   :depends on beautifulsoup4: ``>=4.1.0``
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on cd-hit: ``>=4.6.5``
   :depends on dendropy: ``>=4.2.0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=3.1.0``
   :depends on mummer: ``>=3.23``
   :depends on pyfastaq: ``>=3.12.0``
   :depends on pymummer: ``>=0.11.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``>=1.2``
   :depends on setuptools: 
   :depends on spades: ``>=3.5.0``
   :depends on wget: 

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

    pixi global install ariba

to add into an existing workspace instead, run::

    pixi add ariba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ariba

Alternatively, to install into a new environment, run::

    conda create -n envname ariba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ariba:<tag>

(see `ariba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ariba| image:: https://img.shields.io/conda/dn/bioconda/ariba.svg?style=flat
   :target: https://anaconda.org/bioconda/ariba
   :alt:   (downloads)
.. |docker_ariba| image:: https://quay.io/repository/biocontainers/ariba/status
   :target: https://quay.io/repository/biocontainers/ariba
.. _`ariba/tags`: https://quay.io/repository/biocontainers/ariba?tab=tags


.. raw:: html

    <script>
        var package = "ariba";
        var versions = ["2.14.7","2.14.6","2.14.6","2.14.6","2.14.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ariba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ariba/README.html