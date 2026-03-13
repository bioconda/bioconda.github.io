:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markov_genome'
.. highlight: bash

markov_genome
=============

.. conda:recipe:: markov_genome
   :replaces_section_title:
   :noindex:

   A Rust package for Markov chain sequence simulation.

   :homepage: https://github.com/eaasna/markov_genome
   :license: BSD-3-Clause License
   :recipe: /`markov_genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_genome/meta.yaml>`_

   


.. conda:package:: markov_genome

   |downloads_markov_genome| |docker_markov_genome|

   :versions:
      
      

      ``1.0.0-0``

      

   

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

    pixi global install markov_genome

to add into an existing workspace instead, run::

    pixi add markov_genome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install markov_genome

Alternatively, to install into a new environment, run::

    conda create -n envname markov_genome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/markov_genome:<tag>

(see `markov_genome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_markov_genome| image:: https://img.shields.io/conda/dn/bioconda/markov_genome.svg?style=flat
   :target: https://anaconda.org/bioconda/markov_genome
   :alt:   (downloads)
.. |docker_markov_genome| image:: https://quay.io/repository/biocontainers/markov_genome/status
   :target: https://quay.io/repository/biocontainers/markov_genome
.. _`markov_genome/tags`: https://quay.io/repository/biocontainers/markov_genome?tab=tags


.. raw:: html

    <script>
        var package = "markov_genome";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markov_genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markov_genome/README.html