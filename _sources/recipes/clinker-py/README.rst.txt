:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker-py'
.. highlight: bash

clinker-py
==========

.. conda:recipe:: clinker-py
   :replaces_section_title:
   :noindex:

   Gene cluster comparison figure generator

   :homepage: https://github.com/gamcil/clinker
   :documentation: https://github.com/gamcil/clinker/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`clinker-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab007`, biotools: :biotools:`clinker`

   


.. conda:package:: clinker-py

   |downloads_clinker-py| |docker_clinker-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.32-0</code>,  <code>0.0.31-0</code>,  <code>0.0.30-0</code>,  <code>0.0.29-0</code>,  <code>0.0.28-0</code>,  <code>0.0.27-0</code>,  <code>0.0.26-0</code>,  <code>0.0.25-0</code>,  <code>0.0.24-0</code>,  </span></summary>
      

      ``0.0.32-0``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on disjoint-set: ``>=0.7.1``
   :depends on gffutils: 
   :depends on numpy: ``>=1.13.3``
   :depends on python: ``>=3.6``
   :depends on scipy: ``>=1.3.3``

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

    pixi global install clinker-py

to add into an existing workspace instead, run::

    pixi add clinker-py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clinker-py

Alternatively, to install into a new environment, run::

    conda create -n envname clinker-py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clinker-py:<tag>

(see `clinker-py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clinker-py| image:: https://img.shields.io/conda/dn/bioconda/clinker-py.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker-py
   :alt:   (downloads)
.. |docker_clinker-py| image:: https://quay.io/repository/biocontainers/clinker-py/status
   :target: https://quay.io/repository/biocontainers/clinker-py
.. _`clinker-py/tags`: https://quay.io/repository/biocontainers/clinker-py?tab=tags


.. raw:: html

    <script>
        var package = "clinker-py";
        var versions = ["0.0.32","0.0.31","0.0.30","0.0.29","0.0.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker-py/README.html