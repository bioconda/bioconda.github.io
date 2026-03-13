:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-newick'
.. highlight: bash

python-newick
=============

.. conda:recipe:: python-newick
   :replaces_section_title:
   :noindex:

   A python module to read and write the Newick format.

   :homepage: https://github.com/glottobank/python-newick
   :license: Apache / Apache-2.0
   :recipe: /`python-newick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick/meta.yaml>`_

   


.. conda:package:: python-newick

   |downloads_python-newick| |docker_python-newick|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.2-2``,  ``0.9.2-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

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

    pixi global install python-newick

to add into an existing workspace instead, run::

    pixi add python-newick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-newick

Alternatively, to install into a new environment, run::

    conda create -n envname python-newick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-newick:<tag>

(see `python-newick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-newick| image:: https://img.shields.io/conda/dn/bioconda/python-newick.svg?style=flat
   :target: https://anaconda.org/bioconda/python-newick
   :alt:   (downloads)
.. |docker_python-newick| image:: https://quay.io/repository/biocontainers/python-newick/status
   :target: https://quay.io/repository/biocontainers/python-newick
.. _`python-newick/tags`: https://quay.io/repository/biocontainers/python-newick?tab=tags


.. raw:: html

    <script>
        var package = "python-newick";
        var versions = ["1.11.0","1.10.0","1.9.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-newick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-newick/README.html