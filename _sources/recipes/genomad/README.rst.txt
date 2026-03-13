:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomad'
.. highlight: bash

genomad
=======

.. conda:recipe:: genomad
   :replaces_section_title:
   :noindex:

   Identification of mobile genetic elements.

   :homepage: https://portal.nersc.gov/genomad
   :developer docs: https://github.com/apcamargo/genomad
   :license: BSD / BSD-4-Clause
   :recipe: /`genomad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad/meta.yaml>`_
   :links: biotools: :biotools:`genomad`, usegalaxy-eu: :usegalaxy-eu:`genomad_end_to_end`, doi: :doi:`10.1038/s41587-023-01953-y`

   


.. conda:package:: genomad

   |downloads_genomad| |docker_genomad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.2-0</code>,  <code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-2</code>,  </span></summary>
      

      ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aragorn: 
   :depends on keras: ``>=3``
   :depends on mmseqs2: ``>=15.6f452``
   :depends on numba: ``>=0.57``
   :depends on numpy: ``>=1.21``
   :depends on pyrodigal-gv: ``>=0.3.1``
   :depends on python: ``>=3.9``
   :depends on python-crfsuite: 
   :depends on rich-click: 
   :depends on taxopy: ``>=0.12.0``
   :depends on tensorflow: ``>=2.16``
   :depends on xgboost: ``>=1.6``

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

    pixi global install genomad

to add into an existing workspace instead, run::

    pixi add genomad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomad

Alternatively, to install into a new environment, run::

    conda create -n envname genomad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomad:<tag>

(see `genomad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomad| image:: https://img.shields.io/conda/dn/bioconda/genomad.svg?style=flat
   :target: https://anaconda.org/bioconda/genomad
   :alt:   (downloads)
.. |docker_genomad| image:: https://quay.io/repository/biocontainers/genomad/status
   :target: https://quay.io/repository/biocontainers/genomad
.. _`genomad/tags`: https://quay.io/repository/biocontainers/genomad?tab=tags


.. raw:: html

    <script>
        var package = "genomad";
        var versions = ["1.11.2","1.11.1","1.11.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomad/README.html