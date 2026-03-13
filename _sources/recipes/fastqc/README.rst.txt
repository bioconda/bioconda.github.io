:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqc'
.. highlight: bash

fastqc
======

.. conda:recipe:: fastqc
   :replaces_section_title:
   :noindex:

   A quality control tool for high throughput sequence data.

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/fastqc/
   :license: GPL >=3
   :recipe: /`fastqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc/meta.yaml>`_
   :links: biotools: :biotools:`fastqc`, usegalaxy-eu: :usegalaxy-eu:`fastqc`

   


.. conda:package:: fastqc

   |downloads_fastqc| |docker_fastqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.1-0</code>,  <code>0.11.9-1</code>,  <code>0.11.9-0</code>,  <code>0.11.8-2</code>,  <code>0.11.8-1</code>,  <code>0.11.8-0</code>,  <code>0.11.7-7</code>,  <code>0.11.7-6</code>,  <code>0.11.7-5</code>,  </span></summary>
      

      ``0.12.1-0``,  ``0.11.9-1``,  ``0.11.9-0``,  ``0.11.8-2``,  ``0.11.8-1``,  ``0.11.8-0``,  ``0.11.7-7``,  ``0.11.7-6``,  ``0.11.7-5``,  ``0.11.7-4``,  ``0.11.7-2``,  ``0.11.7-0``,  ``0.11.6-2``,  ``0.11.6-1``,  ``0.11.6-0``,  ``0.11.5-5``,  ``0.11.5-4``,  ``0.11.5-3``,  ``0.11.5-2``,  ``0.11.5-1``,  ``0.11.4-2``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.10.1-1``,  ``0.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on fontconfig: 
   :depends on openjdk: ``>=8.0.144``
   :depends on perl: 

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

    pixi global install fastqc

to add into an existing workspace instead, run::

    pixi add fastqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastqc

Alternatively, to install into a new environment, run::

    conda create -n envname fastqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastqc:<tag>

(see `fastqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastqc| image:: https://img.shields.io/conda/dn/bioconda/fastqc.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqc
   :alt:   (downloads)
.. |docker_fastqc| image:: https://quay.io/repository/biocontainers/fastqc/status
   :target: https://quay.io/repository/biocontainers/fastqc
.. _`fastqc/tags`: https://quay.io/repository/biocontainers/fastqc?tab=tags


.. raw:: html

    <script>
        var package = "fastqc";
        var versions = ["0.12.1","0.11.9","0.11.9","0.11.8","0.11.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqc/README.html