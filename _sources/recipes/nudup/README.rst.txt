:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nudup'
.. highlight: bash

nudup
=====

.. conda:recipe:: nudup
   :replaces_section_title:
   :noindex:

   Marks\/removes duplicate molecules based on the molecular tagging technology used in NuGEN products.

   :homepage: http://nugentechnologies.github.io/nudup/
   :license: GNU Lesser General Public License 3.0
   :recipe: /`nudup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nudup/meta.yaml>`_

   


.. conda:package:: nudup

   |downloads_nudup| |docker_nudup|

   :versions:
      
      

      ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2_post2016104-1``,  ``2.2_post2016104-0``

      

   
   :depends on coreutils: 
   :depends on grep: 
   :depends on python: ``<3``
   :depends on samtools: ``>=1.2``
   :depends on sed: 

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

    pixi global install nudup

to add into an existing workspace instead, run::

    pixi add nudup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nudup

Alternatively, to install into a new environment, run::

    conda create -n envname nudup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nudup:<tag>

(see `nudup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nudup| image:: https://img.shields.io/conda/dn/bioconda/nudup.svg?style=flat
   :target: https://anaconda.org/bioconda/nudup
   :alt:   (downloads)
.. |docker_nudup| image:: https://quay.io/repository/biocontainers/nudup/status
   :target: https://quay.io/repository/biocontainers/nudup
.. _`nudup/tags`: https://quay.io/repository/biocontainers/nudup?tab=tags


.. raw:: html

    <script>
        var package = "nudup";
        var versions = ["2.3.3","2.3.3","2.3.3","2.3.2","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nudup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nudup/README.html