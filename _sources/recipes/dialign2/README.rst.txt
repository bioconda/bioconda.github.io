:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign2'
.. highlight: bash

dialign2
========

.. conda:recipe:: dialign2
   :replaces_section_title:
   :noindex:

   DIALIGN multiple sequence alignment using various sources of external information.

   :homepage: http://dialign.gobics.de
   :license: LGPL
   :recipe: /`dialign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkt283`

   


.. conda:package:: dialign2

   |downloads_dialign2| |docker_dialign2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-9</code>,  <code>2.2.1-8</code>,  <code>2.2.1-7</code>,  <code>2.2.1-6</code>,  <code>2.2.1-5</code>,  <code>2.2.1-4</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  </span></summary>
      

      ``2.2.1-9``,  ``2.2.1-8``,  ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install dialign2

to add into an existing workspace instead, run::

    pixi add dialign2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dialign2

Alternatively, to install into a new environment, run::

    conda create -n envname dialign2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dialign2:<tag>

(see `dialign2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dialign2| image:: https://img.shields.io/conda/dn/bioconda/dialign2.svg?style=flat
   :target: https://anaconda.org/bioconda/dialign2
   :alt:   (downloads)
.. |docker_dialign2| image:: https://quay.io/repository/biocontainers/dialign2/status
   :target: https://quay.io/repository/biocontainers/dialign2
.. _`dialign2/tags`: https://quay.io/repository/biocontainers/dialign2?tab=tags


.. raw:: html

    <script>
        var package = "dialign2";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign2/README.html