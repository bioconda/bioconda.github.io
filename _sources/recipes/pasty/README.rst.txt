:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasty'
.. highlight: bash

pasty
=====

.. conda:recipe:: pasty
   :replaces_section_title:
   :noindex:

   A tool easily taken advantage of for in silico serogrouping of Pseudomonas aeruginosa isolates

   :homepage: https://github.com/rpetit3/pasty
   :license: Apache-2.0
   :recipe: /`pasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty/meta.yaml>`_

   


.. conda:package:: pasty

   |downloads_pasty| |docker_pasty|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on camlhmp: ``>=1.1.0``

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

    pixi global install pasty

to add into an existing workspace instead, run::

    pixi add pasty

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pasty

Alternatively, to install into a new environment, run::

    conda create -n envname pasty

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pasty:<tag>

(see `pasty/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pasty| image:: https://img.shields.io/conda/dn/bioconda/pasty.svg?style=flat
   :target: https://anaconda.org/bioconda/pasty
   :alt:   (downloads)
.. |docker_pasty| image:: https://quay.io/repository/biocontainers/pasty/status
   :target: https://quay.io/repository/biocontainers/pasty
.. _`pasty/tags`: https://quay.io/repository/biocontainers/pasty?tab=tags


.. raw:: html

    <script>
        var package = "pasty";
        var versions = ["2.2.1","2.2.0","2.1.0","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasty/README.html