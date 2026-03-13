:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrm'
.. highlight: bash

scrm
====

.. conda:recipe:: scrm
   :replaces_section_title:
   :noindex:

   A coalescent simulator for genome\-scale sequences

   :homepage: https://scrm.github.io/
   :license: GPL / GPLv3+
   :recipe: /`scrm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrm/meta.yaml>`_

   


.. conda:package:: scrm

   |downloads_scrm| |docker_scrm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.4-5</code>,  <code>1.7.4-4</code>,  <code>1.7.4-3</code>,  <code>1.7.4-2</code>,  <code>1.7.4-1</code>,  <code>1.7.4-0</code>,  <code>1.7.3-1</code>,  <code>1.7.3-0</code>,  <code>1.7.2-1</code>,  </span></summary>
      

      ``1.7.4-5``,  ``1.7.4-4``,  ``1.7.4-3``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install scrm

to add into an existing workspace instead, run::

    pixi add scrm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scrm

Alternatively, to install into a new environment, run::

    conda create -n envname scrm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scrm:<tag>

(see `scrm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scrm| image:: https://img.shields.io/conda/dn/bioconda/scrm.svg?style=flat
   :target: https://anaconda.org/bioconda/scrm
   :alt:   (downloads)
.. |docker_scrm| image:: https://quay.io/repository/biocontainers/scrm/status
   :target: https://quay.io/repository/biocontainers/scrm
.. _`scrm/tags`: https://quay.io/repository/biocontainers/scrm?tab=tags


.. raw:: html

    <script>
        var package = "scrm";
        var versions = ["1.7.4","1.7.4","1.7.4","1.7.4","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrm/README.html