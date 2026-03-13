:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraphase'
.. highlight: bash

paraphase
=========

.. conda:recipe:: paraphase
   :replaces_section_title:
   :noindex:

   HiFi\-based caller for highly homologous genes

   :homepage: https://github.com/PacificBiosciences/paraphase
   :license: BSD-3-Clause-Clear
   :recipe: /`paraphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase/meta.yaml>`_

   


.. conda:package:: paraphase

   |downloads_paraphase| |docker_paraphase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: 
   :depends on networkx: ``>=2.8.2``
   :depends on numpy: ``>=1.16``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on scipy: ``>=1.2``

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

    pixi global install paraphase

to add into an existing workspace instead, run::

    pixi add paraphase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paraphase

Alternatively, to install into a new environment, run::

    conda create -n envname paraphase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paraphase:<tag>

(see `paraphase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paraphase| image:: https://img.shields.io/conda/dn/bioconda/paraphase.svg?style=flat
   :target: https://anaconda.org/bioconda/paraphase
   :alt:   (downloads)
.. |docker_paraphase| image:: https://quay.io/repository/biocontainers/paraphase/status
   :target: https://quay.io/repository/biocontainers/paraphase
.. _`paraphase/tags`: https://quay.io/repository/biocontainers/paraphase?tab=tags


.. raw:: html

    <script>
        var package = "paraphase";
        var versions = ["3.5.0","3.4.0","3.3.4","3.3.3","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraphase/README.html