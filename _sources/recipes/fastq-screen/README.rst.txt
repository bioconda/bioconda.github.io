:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-screen'
.. highlight: bash

fastq-screen
============

.. conda:recipe:: fastq-screen
   :replaces_section_title:
   :noindex:

   FastQ Screen allows you to screen a library of sequences in FastQ format against a set of sequence databases so you can see if the composition of the library matches with what you expect.

   :homepage: https://www.bioinformatics.babraham.ac.uk/projects/fastq_screen
   :developer docs: https://github.com/StevenWingett/FastQ-Screen
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fastq-screen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen/meta.yaml>`_

   


.. conda:package:: fastq-screen

   |downloads_fastq-screen| |docker_fastq-screen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.0-0</code>,  <code>0.15.3-0</code>,  <code>0.15.2-0</code>,  <code>0.14.0-2</code>,  <code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.11.3-1</code>,  </span></summary>
      

      ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.5.2-1``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie: 
   :depends on bowtie2: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-gdgraph: 

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

    pixi global install fastq-screen

to add into an existing workspace instead, run::

    pixi add fastq-screen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastq-screen

Alternatively, to install into a new environment, run::

    conda create -n envname fastq-screen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastq-screen:<tag>

(see `fastq-screen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastq-screen| image:: https://img.shields.io/conda/dn/bioconda/fastq-screen.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-screen
   :alt:   (downloads)
.. |docker_fastq-screen| image:: https://quay.io/repository/biocontainers/fastq-screen/status
   :target: https://quay.io/repository/biocontainers/fastq-screen
.. _`fastq-screen/tags`: https://quay.io/repository/biocontainers/fastq-screen?tab=tags


.. raw:: html

    <script>
        var package = "fastq-screen";
        var versions = ["0.16.0","0.15.3","0.15.2","0.14.0","0.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-screen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-screen/README.html