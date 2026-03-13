:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msgf_plus'
.. highlight: bash

msgf_plus
=========

.. conda:recipe:: msgf_plus
   :replaces_section_title:
   :noindex:

   MS\-GF\+ is a MS\/MS database search tool

   :homepage: https://msgfplus.github.io/
   :license: https://github.com/msgfplus/msgfplus/blob/master/LICENSE.txt
   :recipe: /`msgf_plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus/meta.yaml>`_
   :links: biotools: :biotools:`MSGFplus`, doi: :doi:`10.1038/ncomms6277`

   MS\-GF\+ is a MS\/MS database search tool that is sensitive \(it identifies more
   peptides than other database search tools and as many peptides as spectral
   library search tools\) and universal \(works well for diverse types of
   spectra\, different configurations of MS instruments and different
   experimental protocols\).



.. conda:package:: msgf_plus

   |downloads_msgf_plus| |docker_msgf_plus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.03.26-0</code>,  <code>2023.01.1202-1</code>,  <code>2023.01.1202-0</code>,  <code>2022.04.18-0</code>,  <code>2022.01.07-0</code>,  <code>2021.09.06-0</code>,  <code>2021.03.22-1</code>,  <code>2021.03.22-0</code>,  <code>2021.01.08-1</code>,  </span></summary>
      

      ``2024.03.26-0``,  ``2023.01.1202-1``,  ``2023.01.1202-0``,  ``2022.04.18-0``,  ``2022.01.07-0``,  ``2021.09.06-0``,  ``2021.03.22-1``,  ``2021.03.22-0``,  ``2021.01.08-1``,  ``2021.01.08-0``,  ``2020.08.05-0``,  ``2020.06.22-0``,  ``2020.06.16-0``,  ``2020.03.14-0``,  ``2020.03.12-0``,  ``2020.01.15-0``,  ``2019.07.03-0``,  ``2019.06.28-0``,  ``2019.04.18-0``,  ``2019.02.28-3``,  ``2017.07.21-3``,  ``2017.07.21-2``,  ``2017.07.21-1``,  ``2017.07.21-0``,  ``2016.10.26-2``,  ``2016.10.26-1``,  ``2016.10.26-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=11``
   :depends on python: 

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

    pixi global install msgf_plus

to add into an existing workspace instead, run::

    pixi add msgf_plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msgf_plus

Alternatively, to install into a new environment, run::

    conda create -n envname msgf_plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msgf_plus:<tag>

(see `msgf_plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msgf_plus| image:: https://img.shields.io/conda/dn/bioconda/msgf_plus.svg?style=flat
   :target: https://anaconda.org/bioconda/msgf_plus
   :alt:   (downloads)
.. |docker_msgf_plus| image:: https://quay.io/repository/biocontainers/msgf_plus/status
   :target: https://quay.io/repository/biocontainers/msgf_plus
.. _`msgf_plus/tags`: https://quay.io/repository/biocontainers/msgf_plus?tab=tags


.. raw:: html

    <script>
        var package = "msgf_plus";
        var versions = ["2024.03.26","2023.01.1202","2023.01.1202","2022.04.18","2022.01.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msgf_plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msgf_plus/README.html