:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbccs'
.. highlight: bash

pbccs
=====

.. conda:recipe:: pbccs
   :replaces_section_title:
   :noindex:

   pbccs \- Generate Highly Accurate Single\-Molecule Consensus Reads \(HiFi Reads\)

   :homepage: https://ccs.how
   :license: BSD-3-Clause-Clear
   :recipe: /`pbccs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbccs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbccs/meta.yaml>`_

   


.. conda:package:: pbccs

   |downloads_pbccs| |docker_pbccs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.4.0-0</code>,  <code>6.3.0-0</code>,  <code>6.2.0-0</code>,  <code>6.0.0-2</code>,  <code>6.0.0-1</code>,  <code>6.0.0-0</code>,  <code>5.0.0-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.0-0``,  ``6.0.0-2``,  ``6.0.0-1``,  ``6.0.0-0``,  ``5.0.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install pbccs

to add into an existing workspace instead, run::

    pixi add pbccs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbccs

Alternatively, to install into a new environment, run::

    conda create -n envname pbccs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbccs:<tag>

(see `pbccs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbccs| image:: https://img.shields.io/conda/dn/bioconda/pbccs.svg?style=flat
   :target: https://anaconda.org/bioconda/pbccs
   :alt:   (downloads)
.. |docker_pbccs| image:: https://quay.io/repository/biocontainers/pbccs/status
   :target: https://quay.io/repository/biocontainers/pbccs
.. _`pbccs/tags`: https://quay.io/repository/biocontainers/pbccs?tab=tags


.. raw:: html

    <script>
        var package = "pbccs";
        var versions = ["6.4.0","6.3.0","6.2.0","6.0.0","6.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbccs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbccs/README.html