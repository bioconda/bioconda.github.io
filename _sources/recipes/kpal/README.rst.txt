:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kpal'
.. highlight: bash

kpal
====

.. conda:recipe:: kpal
   :replaces_section_title:
   :noindex:

   Analysis toolkit and programming library for k\-mer profiles

   :homepage: https://kpal.readthedocs.org
   :license: MIT License
   :recipe: /`kpal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal/meta.yaml>`_

   


.. conda:package:: kpal

   |downloads_kpal| |docker_kpal|

   :versions:
      
      

      ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends on biopython: 
   :depends on future: 
   :depends on h5py: ``>=2.1``
   :depends on python: 
   :depends on semantic_version: 

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

    pixi global install kpal

to add into an existing workspace instead, run::

    pixi add kpal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kpal

Alternatively, to install into a new environment, run::

    conda create -n envname kpal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kpal:<tag>

(see `kpal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kpal| image:: https://img.shields.io/conda/dn/bioconda/kpal.svg?style=flat
   :target: https://anaconda.org/bioconda/kpal
   :alt:   (downloads)
.. |docker_kpal| image:: https://quay.io/repository/biocontainers/kpal/status
   :target: https://quay.io/repository/biocontainers/kpal
.. _`kpal/tags`: https://quay.io/repository/biocontainers/kpal?tab=tags


.. raw:: html

    <script>
        var package = "kpal";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kpal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kpal/README.html