:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sistr_cmd'
.. highlight: bash

sistr_cmd
=========

.. conda:recipe:: sistr_cmd
   :replaces_section_title:
   :noindex:

   Salmonella In Silico Typing Resource \(SISTR\) commandline tool for serovar prediction

   :homepage: https://github.com/phac-nml/sistr_cmd/
   :developer docs: https://github.com/phac-nml/sistr_cmd
   :license: APACHE / Apache-2.0
   :recipe: /`sistr_cmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sistr_cmd/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`sistr_cmd`, doi: :doi:`10.1371/journal.pone.0147101`, biotools: :biotools:`SISTR`

   


.. conda:package:: sistr_cmd

   |downloads_sistr_cmd| |docker_sistr_cmd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-2</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.9.0``
   :depends on mafft: 
   :depends on mash: ``>=2.0``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on pandas: ``>=0.22,<3``
   :depends on pycurl: ``>=7.45.6,<8.0a0``
   :depends on pytables: ``>=3.3.0,<3.10.2``
   :depends on python: ``>=3.4``
   :depends on python-dateutil: 
   :depends on scipy: ``>=1.13.1,<1.14.0a0``

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

    pixi global install sistr_cmd

to add into an existing workspace instead, run::

    pixi add sistr_cmd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sistr_cmd

Alternatively, to install into a new environment, run::

    conda create -n envname sistr_cmd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sistr_cmd:<tag>

(see `sistr_cmd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sistr_cmd| image:: https://img.shields.io/conda/dn/bioconda/sistr_cmd.svg?style=flat
   :target: https://anaconda.org/bioconda/sistr_cmd
   :alt:   (downloads)
.. |docker_sistr_cmd| image:: https://quay.io/repository/biocontainers/sistr_cmd/status
   :target: https://quay.io/repository/biocontainers/sistr_cmd
.. _`sistr_cmd/tags`: https://quay.io/repository/biocontainers/sistr_cmd?tab=tags


.. raw:: html

    <script>
        var package = "sistr_cmd";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sistr_cmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sistr_cmd/README.html