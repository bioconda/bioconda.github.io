:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chado-tools'
.. highlight: bash

chado-tools
===========

.. conda:recipe:: chado-tools
   :replaces_section_title:
   :noindex:

   Tools to access CHADO databases

   :homepage: https://github.com/sanger-pathogens/chado-tools
   :license: GPL / GPL-3.0
   :recipe: /`chado-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools/meta.yaml>`_

   


.. conda:package:: chado-tools

   |downloads_chado-tools| |docker_chado-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.15-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  <code>0.2.8-0</code>,  <code>0.2.5-0</code>,  <code>0.0.5-0</code>,  </span></summary>
      

      ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.8-0``,  ``0.2.5-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on gffutils: 
   :depends on postgresql: ``>=9.6``
   :depends on pronto: ``>=0.11.0``
   :depends on psycopg2: 
   :depends on python: ``3.6.*``
   :depends on pyyaml: 
   :depends on sqlalchemy: 
   :depends on sqlalchemy-utils: 

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

    pixi global install chado-tools

to add into an existing workspace instead, run::

    pixi add chado-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chado-tools

Alternatively, to install into a new environment, run::

    conda create -n envname chado-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chado-tools:<tag>

(see `chado-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chado-tools| image:: https://img.shields.io/conda/dn/bioconda/chado-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/chado-tools
   :alt:   (downloads)
.. |docker_chado-tools| image:: https://quay.io/repository/biocontainers/chado-tools/status
   :target: https://quay.io/repository/biocontainers/chado-tools
.. _`chado-tools/tags`: https://quay.io/repository/biocontainers/chado-tools?tab=tags


.. raw:: html

    <script>
        var package = "chado-tools";
        var versions = ["0.2.15","0.2.14","0.2.13","0.2.12","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chado-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chado-tools/README.html