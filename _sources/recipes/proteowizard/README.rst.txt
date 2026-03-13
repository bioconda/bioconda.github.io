:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteowizard'
.. highlight: bash

proteowizard
============

.. conda:recipe:: proteowizard
   :replaces_section_title:
   :noindex:

   Tools for dealing with mass spectrometry files \(e.g.\, mzML\, mzXML\, mzIdentML\, MGF\).

   :homepage: https://proteowizard.sourceforge.net
   :license: APACHE / Apache 2.0
   :recipe: /`proteowizard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard/meta.yaml>`_
   :links: biotools: :biotools:`proteowizard`, doi: :doi:`10.1038/nbt.2377`

   


.. conda:package:: proteowizard

   |downloads_proteowizard| |docker_proteowizard|

   :versions:
      
      

      ``3_0_25292_c9a6a18-0``,  ``3_0_9992-2``,  ``3_0_9992-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install proteowizard

to add into an existing workspace instead, run::

    pixi add proteowizard

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteowizard

Alternatively, to install into a new environment, run::

    conda create -n envname proteowizard

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteowizard:<tag>

(see `proteowizard/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteowizard| image:: https://img.shields.io/conda/dn/bioconda/proteowizard.svg?style=flat
   :target: https://anaconda.org/bioconda/proteowizard
   :alt:   (downloads)
.. |docker_proteowizard| image:: https://quay.io/repository/biocontainers/proteowizard/status
   :target: https://quay.io/repository/biocontainers/proteowizard
.. _`proteowizard/tags`: https://quay.io/repository/biocontainers/proteowizard?tab=tags


.. raw:: html

    <script>
        var package = "proteowizard";
        var versions = ["3_0_25292_c9a6a18","3_0_9992","3_0_9992"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteowizard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteowizard/README.html