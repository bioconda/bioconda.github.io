:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flight-genome'
.. highlight: bash

flight-genome
=============

.. conda:recipe:: flight-genome
   :replaces_section_title:
   :noindex:

   flight \- python component of Rosella and Lorikeet

   :homepage: https://github.com/rhysnewell/flight
   :license: BSD / BSD-3
   :recipe: /`flight-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome/meta.yaml>`_

   


.. conda:package:: flight-genome

   |downloads_flight-genome| |docker_flight-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on python: ``>=3.8``

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

    pixi global install flight-genome

to add into an existing workspace instead, run::

    pixi add flight-genome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flight-genome

Alternatively, to install into a new environment, run::

    conda create -n envname flight-genome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flight-genome:<tag>

(see `flight-genome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flight-genome| image:: https://img.shields.io/conda/dn/bioconda/flight-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/flight-genome
   :alt:   (downloads)
.. |docker_flight-genome| image:: https://quay.io/repository/biocontainers/flight-genome/status
   :target: https://quay.io/repository/biocontainers/flight-genome
.. _`flight-genome/tags`: https://quay.io/repository/biocontainers/flight-genome?tab=tags


.. raw:: html

    <script>
        var package = "flight-genome";
        var versions = ["1.6.3","1.6.2","1.6.1","1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flight-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flight-genome/README.html