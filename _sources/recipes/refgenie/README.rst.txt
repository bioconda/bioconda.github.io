:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenie'
.. highlight: bash

refgenie
========

.. conda:recipe:: refgenie
   :replaces_section_title:
   :noindex:

   Refgenie creates a standardized folder structure for reference genome files and indexes. You can download pre\-built genomes or build your own for any fasta file

   :homepage: http://refgenie.databio.org
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie/meta.yaml>`_

   


.. conda:package:: refgenie

   |downloads_refgenie| |docker_refgenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on logmuse: ``>=0.2.6``
   :depends on piper: ``>=0.12.1``
   :depends on pyfaidx: ``>=0.5.5.2``
   :depends on python: ``>=3.6``
   :depends on refgenconf: ``>=0.10.0``
   :depends on yacman: ``>=0.8.0``

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

    pixi global install refgenie

to add into an existing workspace instead, run::

    pixi add refgenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install refgenie

Alternatively, to install into a new environment, run::

    conda create -n envname refgenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/refgenie:<tag>

(see `refgenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_refgenie| image:: https://img.shields.io/conda/dn/bioconda/refgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenie
   :alt:   (downloads)
.. |docker_refgenie| image:: https://quay.io/repository/biocontainers/refgenie/status
   :target: https://quay.io/repository/biocontainers/refgenie
.. _`refgenie/tags`: https://quay.io/repository/biocontainers/refgenie?tab=tags


.. raw:: html

    <script>
        var package = "refgenie";
        var versions = ["0.12.1","0.12.0","0.11.0","0.10.0","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenie/README.html