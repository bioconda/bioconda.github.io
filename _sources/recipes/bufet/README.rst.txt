:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bufet'
.. highlight: bash

bufet
=====

.. conda:recipe:: bufet
   :replaces_section_title:
   :noindex:

   Tool that performs the unbiased miRNA functional enrichment analysis \(Bleazard et al.\) requiring significantly reduced excution times \(less than 10 minutes for 1 million iterations\).

   :homepage: https://github.com/diwis/BUFET/
   :license: file
   :recipe: /`bufet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bufet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bufet/meta.yaml>`_
   :links: biotools: :biotools:`BUFET`, doi: :doi:`10.1186/s12859-017-1812-8`

   


.. conda:package:: bufet

   |downloads_bufet| |docker_bufet|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``

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

    pixi global install bufet

to add into an existing workspace instead, run::

    pixi add bufet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bufet

Alternatively, to install into a new environment, run::

    conda create -n envname bufet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bufet:<tag>

(see `bufet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bufet| image:: https://img.shields.io/conda/dn/bioconda/bufet.svg?style=flat
   :target: https://anaconda.org/bioconda/bufet
   :alt:   (downloads)
.. |docker_bufet| image:: https://quay.io/repository/biocontainers/bufet/status
   :target: https://quay.io/repository/biocontainers/bufet
.. _`bufet/tags`: https://quay.io/repository/biocontainers/bufet?tab=tags


.. raw:: html

    <script>
        var package = "bufet";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bufet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bufet/README.html